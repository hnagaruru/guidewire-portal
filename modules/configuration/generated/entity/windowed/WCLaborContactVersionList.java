package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContact.eti;WCLaborContact.eix;WCLaborContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCLaborContactVersionList extends entity.windowed.WCPolicyContactRoleVersionList {
  entity.WCLaborContact AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date);
  
  
  void addToDetails(entity.WCLaborContactDetail bean);
  
  
  java.util.List<? extends entity.WCLaborContact> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails();
  
  
  
}