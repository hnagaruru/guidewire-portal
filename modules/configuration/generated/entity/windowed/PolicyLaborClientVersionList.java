package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLaborClient.eti;PolicyLaborClient.eix;PolicyLaborClient.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyLaborClientVersionList extends entity.windowed.WCLaborContactVersionList {
  entity.PolicyLaborClient AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date);
  
  
  void addToDetails(entity.WCLaborContactDetail bean);
  
  
  java.util.List<? extends entity.PolicyLaborClient> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails();
  
  
  
}