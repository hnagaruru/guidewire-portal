package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInterest.eti;PolicyAddlInterest.eix;PolicyAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyAddlInterestVersionList extends entity.windowed.PolicyContactRoleVersionList {
  java.util.List<? extends entity.AddlInterestDetail> AdditionalInterestDetailsAsOf(java.util.Date date);
  
  
  entity.PolicyAddlInterest AsOf(java.util.Date date);
  
  
  void addToAdditionalInterestDetails(entity.AddlInterestDetail bean);
  
  
  java.util.List<? extends entity.windowed.AddlInterestDetailVersionList> getAdditionalInterestDetails();
  
  
  java.util.List<? extends entity.PolicyAddlInterest> getAllVersions();
  
  
  
}