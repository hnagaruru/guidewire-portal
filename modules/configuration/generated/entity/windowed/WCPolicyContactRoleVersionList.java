package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCPolicyContactRole.eti;WCPolicyContactRole.eix;WCPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.WCPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCPolicyContactRole> getAllVersions();
  
  
  
}