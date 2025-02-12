const muscleInfo = {
	biceps_brachii:{name: "Biceps Brachii", function: "...", location: "...", exercises: "..."},
	none:{ name: "Please select a muscle", function: "", location: "", exercises: ""},
	gastrocnemius:{ name: "Gastrocnemius", function: "...", location: "...", exercises: "..."},
	semimembranosus:{ name: "Semimembranosus", function: "...", location: "...", exercises: "..."},
	semitendinosus:{ name: "Semitendinosus", function: "...", location: "...", exercises: "..."},
	biceps_femoris:{ name: "Biceps Femoris", function: "...", location: "...", exercises: "..."},
	gracilis:{ name: "Gracilis", function: "...", location: "...", exercises: "..."},
	vastus_lateralis:{ name: "Vastus Lateralis", function: "...", location: "...", exercises: "..."},
	gluteus_maximus:{ name: "Gluteus Maximus", function: "...", location: "...", exercises: "..."},
	gluteus_medius:{ name: "Gluteus Medius", function: "...", location: "...", exercises: "..."},
	internal_oblique:{ name: "Internal Oblique", function: "...", location: "...", exercises: "..."},
	external_oblique:{ name: "External Oblique", function: "...", location: "...", exercises: "..."},
	extensors:{ name: "Extensors", function: "...", location: "...", exercises: "..."},
	latissimus_dorsi:{ name: "Latissimus Dorsi", function: "...", location: "...", exercises: "..."},
	triceps_brachii:{ name: "Triceps Brachii", function: "...", location: "...", exercises: "..."},
	teres_major:{ name: "Teres Major", function: "...", location: "...", exercises: "..."},
	rhomboid:{ name: "Rhomboid", function: "...", location: "...", exercises: "..."},
	deltoid:{ name: "Deltoid", function: "...", location: "...", exercises: "..."},
	trapezius:{ name: "Trapezius", function: "...", location: "...", exercises: "..."},
	soleus:{ name: "Soleus", function: "...", location: "...", exercises: "..."},
	peroneus_longus:{ name: "Peroneus Longus", function: "...", location: "...", exercises: "..."},
	tibialis_anterior:{ name: "Tibialis Anterior", function: "...", location: "...", exercises: "..."},
	vastus_medialis:{ name: "Vastus Medialis", function: "...", location: "...", exercises: "..."},
	rectus_femoris:{ name: "Rectus Femoris", function: "...", location: "...", exercises: "..."},
	sartorius:{ name: "Sartorius", function: "...", location: "...", exercises: "..."},
	adductor_longus:{ name: "Adductor Longus", function: "...", location: "...", exercises: "..."},
	flexors:{ name: "Flexors", function: "...", location: "...", exercises: "..."},
	brachialis:{ name: "Brachialis", function: "...", location: "...", exercises: "..."},
	serratus_anterior:{ name: "Serratus Anterior", function: "...", location: "...", exercises: "..."},
	pectoris_major:{ name: "Pectoris Major", function: "...", location: "...", exercises: "..."},
	sternocleidomastoid:{ name: "Sternocleidomastoid", function: "...", location: "...", exercises: "..."},
	rectus_abdominis:{ name: "Rectus Abdominis", function: "...", location: "...", exercises: "..."},
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
