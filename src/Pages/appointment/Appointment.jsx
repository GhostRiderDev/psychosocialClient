import { useState, useEffect } from "react";
import { FaUserMd, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import baseURL from "../../config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import es from "date-fns/locale/es";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [services, setServices] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [error, setError] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [disponibleSlots, setDisponibleSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigation = useNavigate();

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setError(""); // Clear error when service is selected
    setStep(2);
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      setError("Por favor selecciona un servicio para continuar");
      return;
    }
    if (step === 2 && !selectedTherapist) {
      setError("Por favor selecciona un terapeuta para continuar");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  useEffect(() => {
    baseURL.get("subscription/get-plan").then((res) => {
      setServices(res.data.data);
    });

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Iniciar sesión",
        text: "Para agendar una cita, por favor inicie sesión.",
        showCancelButton: true,
        confirmButtonText: "Iniciar sesión",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
        if(result.isDismissed){
          navigation("/");
        }
      });
      return;
    }
    const authorization = { Authorization: `Bearer ${token}` };

    baseURL.get("therapist/all", { headers: authorization }).then((res) => {
      setTherapists(res.data.data.attributes);
    });
    const today = new Date();
    baseURL
      .post(
        "apointment/disponible",
        {
          date: `${today.getFullYear()}-${today.getMonth() + 1}-${
            today.getDay() + 1
          }`,
          therapistId: selectedTherapist,
          userId: JSON.parse(localStorage.getItem("yourInfo"))._id,
        },
        { headers: authorization }
      )
      .then((res) => {
        setDisponibleSlots(res.data.data.attributes);
      });
  }, [selectedTherapist]);

  useEffect(() => {
    if (selectedTherapist) {
      baseURL
        .post(
          "apointment/disponible",
          {
            date: selectedDate,
            therapistId: selectedTherapist,
            userId: JSON.parse(localStorage.getItem("yourInfo"))._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          setDisponibleSlots(res.data.data.attributes);
        });
    }
    setSelectedSlot(null);
  }, [selectedTherapist, selectedDate]);

  const filterSlotsByTherapist = (slots, therapistId) => {
    return slots.filter(
      (slot) =>
        slot.therapistId === therapistId &&
        selectedService.duration === slot.duration
    );
  };

  const createAppointment = async () => {
    if (selectedDate === null) {
      setError("Por favor selecciona una fecha para continuar");
      return;
    }

    if (selectedSlot === null) {
      setError("Por favor selecciona un horario para continuar");
      return;
    }

    const token = localStorage.getItem("token");

    const data = {
      userId: JSON.parse(localStorage.getItem("yourInfo"))._id,
      therapistId: selectedTherapist,
      packageId: selectedService._id,
      date: selectedDate,
      time: selectedSlot,
    };

    baseURL
      .post("apointment/select", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Cita agendada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          navigation("/panel/user/appointments");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al agendar la cita",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-2 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary py-6 px-8">
          <h1 className="text-3xl font-semibold text-white">Agenda tu Cita</h1>
          <p className="text-blue-100 mt-2">
            Selecciona el servicio y profesional de tu preferencia
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center py-6 bg-blue-50">
          <div
            className={`flex items-center ${
              step >= 1 ? "text-primary" : "text-gray-400"
            }`}
          >
            <MdMedicalServices className="text-2xl" />
            <span className="ml-2 font-medium">Servicio</span>
          </div>
          <div className="w-16 h-[2px] mx-4 bg-gray-300" />
          <div
            className={`flex items-center ${
              step >= 2 ? "text-primary" : "text-gray-400"
            }`}
          >
            <FaUserMd className="text-2xl" />
            <span className="ml-2 font-medium">Profesional</span>
          </div>
          <div className="w-16 h-[2px] mx-4 bg-gray-300" />
          <div
            className={`flex items-center ${
              step >= 3 ? "text-primary" : "text-gray-400"
            }`}
          >
            <FaCalendarAlt className="text-2xl" />
            <span className="ml-2 font-medium">Fecha y Hora</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service._id}
                  onClick={() => handleServiceSelect(service)}
                  className="p-6 border rounded-xl cursor-pointer transition-all hover:shadow-lg hover:border-primary hover:scale-105"
                >
                  <MdMedicalServices className="text-3xl text-primart mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.planType}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Duración: {service.duration}
                  </p>
                  <p className="text-primary font-semibold">${service.price}</p>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {therapists.map((therapist) => (
                <div
                  key={therapist._id}
                  onClick={() => {
                    setSelectedTherapist(therapist._id);
                    setStep(3);
                  }}
                  className="p-6 border rounded-xl cursor-pointer transition-all hover:shadow-lg hover:border-primary hover:scale-105"
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${
                      therapist.image.publicFileURL
                    }`}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                    alt="therapist"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {therapist.name}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Selecciona una fecha
                </h3>
                <div className="p-4 border rounded-xl">
                  <div className="p-4 border rounded-xl">
                    {!showDatePicker && selectedDate ? (
                      <div
                        className="cursor-pointer hover:bg-blue-50 p-4 rounded-lg transition-colors"
                        onClick={() => setShowDatePicker(true)}
                      >
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-primary" />
                          <span className="text-lg">
                            {format(selectedDate, "EEEE d 'de' MMMM, yyyy", {
                              locale: es,
                            })}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          setShowDatePicker(false);
                        }}
                        inline
                        locale={es}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 10)}
                        filterDate={(date) =>
                          date.getDay() !== 0 && date.getDay() !== 6
                        }
                        dateFormat="MMMM d, yyyy"
                        calendarClassName="!border-0"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Horarios disponibles
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {disponibleSlots &&
                    filterSlotsByTherapist(
                      disponibleSlots,
                      selectedTherapist
                    ).map((slot, key) => (
                      <div
                        key={key}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`${
                          selectedSlot === slot.time && "bg-green-500"
                        } ${
                          selectedSlot === slot.time && "text-white"
                        } p-4 border rounded-lg cursor-pointer transition-all`}
                      >
                        <FaClock
                          className={`${
                            selectedSlot === slot.time
                              ? "text-primary"
                              : "text-gray-400"
                          }`}
                        />
                        <span>{slot.time}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="px-8 pb-4">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}
        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-blue-50 transition-colors"
            >
              Anterior
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors ml-auto"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => createAppointment()}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors ml-auto"
            >
              Confirmar Cita
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
