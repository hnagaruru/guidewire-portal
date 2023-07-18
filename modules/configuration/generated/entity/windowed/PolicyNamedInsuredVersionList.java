package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyNamedInsured.eti;PolicyNamedInsured.eix;PolicyNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyNamedInsuredVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.PolicyNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  java.util.List<? extends entity.PolicyNamedInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  
}