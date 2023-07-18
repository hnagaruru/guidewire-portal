package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyOwnerOfficer.eti;PolicyOwnerOfficer.eix;PolicyOwnerOfficer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyOwnerOfficerVersionList extends entity.windowed.WCPolicyContactRoleVersionList {
  entity.PolicyOwnerOfficer AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyOwnerOfficer> getAllVersions();
  
  
  
}