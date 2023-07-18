package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLPolicyContactRole.eti;GLPolicyContactRole.eix;GLPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.GLPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLPolicyContactRole> getAllVersions();
  
  
  
}