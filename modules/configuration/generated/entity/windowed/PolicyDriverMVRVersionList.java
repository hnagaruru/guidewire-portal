package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriverMVR.eti;PolicyDriverMVR.eix;PolicyDriverMVR.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyDriverMVRVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PolicyDriverMVR AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyDriverMVR> getAllVersions();
  
  
  
}