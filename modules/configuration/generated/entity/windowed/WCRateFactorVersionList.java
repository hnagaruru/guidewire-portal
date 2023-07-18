package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRateFactor.eti;WCRateFactor.eix;WCRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCRateFactor> getAllVersions();
  
  
  
}