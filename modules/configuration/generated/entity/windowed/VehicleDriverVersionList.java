package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleDriver.eti;VehicleDriver.eix;VehicleDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface VehicleDriverVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.VehicleDriver AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.VehicleDriver> getAllVersions();
  
  
  
}