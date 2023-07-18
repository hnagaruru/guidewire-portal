package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContactDetail.eti;WCLaborContactDetail.eix;WCLaborContactDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCLaborContactDetailVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCLaborContactDetail AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCLaborContactDetail> getAllVersions();
  
  
  
}