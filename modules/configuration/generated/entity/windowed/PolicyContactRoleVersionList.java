package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactRole.eti;PolicyContactRole.eix;PolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyContactRoleVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PolicyContactRole AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyContactRole> getAllVersions();
  
  
  
}