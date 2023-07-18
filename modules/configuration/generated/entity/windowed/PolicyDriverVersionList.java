package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriver.eti;PolicyDriver.eix;PolicyDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyDriverVersionList extends entity.windowed.PAPolicyContactRoleVersionList {
  entity.PolicyDriver AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyDriverMVR> PolicyDriverMVRArrayAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.VehicleDriver> VehicleDriversAsOf(java.util.Date date);
  
  
  void addToPolicyDriverMVRArray(entity.PolicyDriverMVR bean);
  
  
  void addToVehicleDrivers(entity.VehicleDriver bean);
  
  
  java.util.List<? extends entity.PolicyDriver> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PolicyDriverMVRVersionList> getPolicyDriverMVRArray();
  
  
  java.util.List<? extends entity.windowed.VehicleDriverVersionList> getVehicleDrivers();
  
  
  
}