package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInsured.eti;PolicyAddlInsured.eix;PolicyAddlInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyAddlInsuredVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.PolicyAddlInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyAddlInsuredDetail> PolicyAdditionalInsuredDetailsAsOf(java.util.Date date);
  
  
  void addToPolicyAdditionalInsuredDetails(entity.PolicyAddlInsuredDetail bean);
  
  
  java.util.List<? extends entity.PolicyAddlInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PolicyAddlInsuredDetailVersionList> getPolicyAdditionalInsuredDetails();
  
  
  
}