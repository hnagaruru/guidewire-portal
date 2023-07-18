package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLaborContractor.eti;PolicyLaborContractor.eix;PolicyLaborContractor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyLaborContractorVersionList extends entity.windowed.WCLaborContactVersionList {
  entity.PolicyLaborContractor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date);
  
  
  void addToDetails(entity.WCLaborContactDetail bean);
  
  
  java.util.List<? extends entity.PolicyLaborContractor> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails();
  
  
  
}