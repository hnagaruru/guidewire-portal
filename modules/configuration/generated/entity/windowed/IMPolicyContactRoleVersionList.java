package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMPolicyContactRole.eti;IMPolicyContactRole.eix;IMPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.IMPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMPolicyContactRole> getAllVersions();
  
  
  
}