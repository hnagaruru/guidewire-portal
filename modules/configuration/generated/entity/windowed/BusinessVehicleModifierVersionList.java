package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleModifier.eti;BusinessVehicleModifier.eix;BusinessVehicleModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessVehicleModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessVehicleModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicleModifier> getAllVersions();
  
  
  
}