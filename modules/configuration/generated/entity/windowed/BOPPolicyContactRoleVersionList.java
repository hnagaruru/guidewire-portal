package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPPolicyContactRole.eti;BOPPolicyContactRole.eix;BOPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.BOPPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPPolicyContactRole> getAllVersions();
  
  
  
}