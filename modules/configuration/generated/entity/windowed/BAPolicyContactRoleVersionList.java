package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAPolicyContactRole.eti;BAPolicyContactRole.eix;BAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAPolicyContactRoleVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.BAPolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAPolicyContactRole> getAllVersions();
  
  
  
}