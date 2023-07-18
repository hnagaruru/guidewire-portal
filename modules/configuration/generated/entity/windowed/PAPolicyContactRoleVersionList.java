package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAPolicyContactRole.eti;PAPolicyContactRole.eix;PAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.PAPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAPolicyContactRole> getAllVersions();
  
  
  
}