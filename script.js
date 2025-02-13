const muscleInfo = {
	adductor_longus:{ name: "Adductor Longus", function: "Adducts (bring inward) the thigh and assists in hip flexion", location: "Inner thigh, running from the pubis to the femur", involvement: "Hip adduction, walking and squeezing movements", exercises: "..."},
	biceps_brachii:{name: "Biceps Brachii", function: "Flexes the elbow and supinates (rotates) the forearm", location: "Front of the upper arm, between the shoulder and elbow", involvement: "Curling motions, lifting and pulling exercises", exercises: "..."},
	biceps_femoris:{ name: "Biceps Femoris", function: "Flexes the knee and extends the hip", location: "Back of the thigh, part of the hamstrings", involvement: "Running, jumping and squatting movements", exercises: "..."},
	brachialis:{ name: "Brachialis", function: "Primary elbow flexor, assisting the biceps", location: "Underneath the biceps, on the front of the upper arm", involvement: "Bicep curls, pulling and lifting movements", exercises: "..."},
	deltoid:{ name: "Deltoid", function: "Lifts the arm in multiple directions (front, side, back)", location: "Covers the shoulder joint, giving in a rounded shape", involvement: "Shoulder presses, lateral raises and overhead lifts", exercises: "..."},
	extensors:{ name: "Extensors", function: "Extend the wrist and fingers", location: "Back of the forearm, from the elbow to the hand", involvement: "Grip strength, wrist stability and finger movements", exercises: "..."},
	external_oblique:{ name: "External Oblique", function: "Rotates and side-bends the torso", location: "Outer sides of the abdomen, from ribs to the pelvis", involvement: "Twisting motions, side bends and core exercises", exercises: "..."},
	flexors:{ name: "Flexors", function: "Flex the wrist and fingers, allowing gripping", location: "Front of the forearm, running from the elbow to the palm", involvement: "Grip strength, forearm curls and climbing", exercises: "..."},
	gastrocnemius:{ name: "Gastrocnemius", function: "Raises the heel (plantar flexion) and assists knee flexion", location: "Large calf muscle, visible at the back of the lower leg", involvement: "Jumping, running and walking uphill", exercises: "..."},
	gluteus_maximus:{ name: "Gluteus Maximus", function: "Extends and rotates the hip, stabilizing the pelvis", location: "Largest buttock muscle, covering the back of the hip", involvement: "Squats, hip thrusts and running", exercises: "..."},
	gluteus_medius:{ name: "Gluteus Medius", function: "Abducts (lifts outward) and stabilizes the hip", location: "Side of the hip, underneath the gluteus maximus", involvement: "Side lunges, hip abductions and balance exercises", exercises: "..."},
	gracilis:{ name: "Gracilis", function: "Adducts the thigh and flexes the knee", location: "Inner thigh, running from the pelvis to the tibia", involvement: "Hip adduction, squats and cross-body movements", exercises: "..."},
	internal_oblique:{ name: "Internal Oblique", function: "Rotates and flexes the torso, supporting the core", location: "Beneath the external obliques, on the sides of the abdomen", involvement: "Side crunches, twisting and stability exercises", exercises: "..."},
	latissimus_dorsi:{ name: "Latissimus Dorsi", function: "Pulls the arms downward and backward", location: "Large muscle covering the mid to lower back", involvement: "Pull-ups, rows and swimming strokes", exercises: "..."},
	pectoris_major:{ name: "Pectoris Major", function: "Moves the arms across the chest and assists in pushing", location: "Large chest muscle, covering the upper torso", involvement: "Bench press, push-ups and dips", exercises: "..."},
	peroneus_longus:{ name: "Peroneus Longus", function: "Everts (rotates outward) and stabilizes the foot", location: "Outer side of the lower leg, near the fibula", involvement: "Walking, running and lateral movements", exercises: "..."},
	rectus_abdominis:{ name: "Rectus Abdominis", function: "Flexes the spine and stabilizes the core", location: "Runs vertically down the front of the abdomen (six-pack)", involvement: "Crunches, leg raises and planks", exercises: "..."},
	rectus_femoris:{ name: "Rectus Femoris", function: "Extends the knee and flexes the hip", location: "Middle of the thigh, part of the quadriceps", involvement: "Squats, lunges and sprinting", exercises: "..."},
	rhomboid:{ name: "Rhomboid", function: "Retracts (pulls together) the shoulder blades", location: "Upper back, between the spine and scapula", involvement: "Rows, reverse flys and good posture", exercises: "..."},
	sartorius:{ name: "Sartorius", function: "Flexes, abducts and laterally rotates the hip", location: "Longest muscle in the body, running diagonally across the thigh", involvement: "Leg crossovers, sprinting and knee stability", exercises: "..."},
	semimembranosus:{ name: "Semimembranosus", function: "Flexes the knee and extends the hip", location: "Back of the thigh, part of the hamstrings", involvement: "Deadlifts, hamstring curls and running", exercises: "..."},
	semitendinosus:{ name: "Semitendinosus", function: "Helps flex the knee and extend the hip", location: "Alongside the semimembranosus in the hamstrings", involvement: "Squats, lunges and jumping", exercises: "..."},
	serratus_anterior:{ name: "Serratus Anterior", function: "Stabilizes the scapula (shoulder blade) a,d aids in pushing", location: "Side of the ribs, under the armpit", involvement: "Punching, push-ups and overhead movements", exercises: "..."},
	soleus:{ name: "Soleus", function: "Assists in plantar flexion (pointing toes down)", location: "Underneath the gastrocnemius in the calf", involvement: "Calf raises, walking and running", exercises: "..."},
	sternocleidomastoid:{ name: "Sternocleidomastoid", function: "Rotates and tilts the head", location: "Side of the neck, running from the skull to the clavicle", involvement: "Neck stretches, head tilts and posture control", exercises: "..."},
	teres_major:{ name: "Teres Major", function: "Assists in arm rotation and pulling movements", location: "Upper back, near the shoulder blade", involvement: "Pull-ups, rows and lat exercises", exercises: "..."},
	tibialis_anterior:{ name: "Tibialis Anterior", function: "Raises the foot (dorsiflexion)", location: "Front of the lower leg, next to the shin bone", involvement: "Walking, running and toe raises", exercises: "..."},
	trapezius:{ name: "Trapezius", function: "Moves the scapula and supports the neck", location: "Large triangular muscle covering the upper back", involvement: "Shrugs, rows and overhead lifts", exercises: "..."},
	triceps_brachii:{ name: "Triceps Brachii", function: "Extends the elbow", location: "Back of the upper arm", involvement: "Dips, push-ups and tricep extensions", exercises: "..."},
	vastus_lateralis:{ name: "Vastus Lateralis", function: "Extends the knee", location: "Outer thigh, part of the quadriceps", involvement: "Squats, lunges and cycling", exercises: "..."},
	vastus_medialis:{ name: "Vastus Medialis", function: "Extends the knee and stabilizes the kneecap", location: "Inner thigh, near the knee", involvement: "Leg presses, lunges and step-ups", exercises: "..."},
	none:{ name: "Please select a muscle", function: "", location: "",involvement: "", exercises: ""},
};
let selectedMuscle = null;

function resetMuscles(){
	document.querySelectorAll("svg path").forEach(muscle => {
		if (muscle !== selectedMuscle){
			muscle.setAttribute("fill", "black");
		}
	});
}

function getMusclePaths(muscleId){
	return document.querySelectorAll(`svg path[id="${muscleId}"]`);
}

document.querySelectorAll("svg path").forEach(muscle => {
    muscle.addEventListener("click", function (){
        resetMuscles();
		let muscleId = this.id;
		let musclePaths = getMusclePaths(muscleId);
		selectedMuscle = this;
		resetMuscles();
		musclePaths.forEach(path => path.setAttribute("fill", "red"));
        if (muscleInfo[muscleId]){
            document.getElementById("info-text").innerHTML = `
                <h2><strong>${muscleInfo[muscleId].name}</strong></h2><br>
                <strong>Function</strong><br><br>${muscleInfo[muscleId].function}<br><br>
                <strong>Location</strong><br><br>${muscleInfo[muscleId].location}<br><br>
		<strong>Involved In</strong><br><br>${muscleInfo[muscleId].involvement}<br><br>
				<strong>Exercises</strong><br>
				<br>
				${muscleInfo[muscleId].exercises}
            `;
        }else{
			document.getElementById("info-text").innerText = "No information available.";
        }
    });
	muscle.addEventListener("mouseenter", function(){
		if (this !== selectedMuscle){
			getMusclePaths(this.id).forEach(path => path.setAttribute("fill","red"));
		}
	});

	muscle.addEventListener("mouseleave", function(){
		if (this !== selectedMuscle){
			getMusclePaths(this.id).forEach(path => path.setAttribute("fill","black"));
		}
	});
});
