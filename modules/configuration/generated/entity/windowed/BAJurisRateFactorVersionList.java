package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisRateFactor.eti;BAJurisRateFactor.eix;BAJurisRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAJurisRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAJurisRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAJurisRateFactor> getAllVersions();
  
  
  
}