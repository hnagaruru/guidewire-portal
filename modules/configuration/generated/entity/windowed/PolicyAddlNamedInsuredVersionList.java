package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlNamedInsured.eti;PolicyAddlNamedInsured.eix;PolicyAddlNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyAddlNamedInsuredVersionList extends entity.windowed.PlcyNonPriNamedInsuredVersionList {
  entity.PolicyAddlNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  java.util.List<? extends entity.PolicyAddlNamedInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  
}