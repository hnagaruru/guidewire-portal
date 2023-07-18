package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPPolicyContactRole.eti;CPPolicyContactRole.eix;CPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.CPPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPPolicyContactRole> getAllVersions();
  
  
  
}