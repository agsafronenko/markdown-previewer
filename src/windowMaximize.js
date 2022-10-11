import $ from "jquery";
import maximize_icon from "./icons/maximize_icon.svg";
import minimize_icon from "./icons/minimize_icon.svg";

export let editorMaxMinIcon = maximize_icon;
export let previewMaxMinIcon = maximize_icon;

export function editorMaxMin(state) {
  if (state) {
    $(".mainHeading").hide();
    $("#editorBox").css("width", "100vw");
    $("#editor").css("height", "90vh");
    $("#previewBox").hide();
    editorMaxMinIcon = minimize_icon;
  }
  if (!state) {
    $(".mainHeading").show();
    $("#editorBox").css("width", "");
    $("#editor").css("height", "");
    $("#previewBox").show();
    editorMaxMinIcon = maximize_icon;
  }
}

export function previewMaxMin(state) {
  if (state) {
    $(".mainHeading").hide();
    $("#previewBox").css("width", "100vw");
    $("#preview").css("height", "90vh");
    $("#editorBox").hide();
    previewMaxMinIcon = minimize_icon;
  }
  if (!state) {
    $(".mainHeading").show();
    $("#previewBox").css("width", "");
    $("#preview").css("height", "");
    $("#editorBox").show();
    previewMaxMinIcon = maximize_icon;
  }
}
