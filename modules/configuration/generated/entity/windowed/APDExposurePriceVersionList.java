package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDExposurePrice.eti;APDExposurePrice.eix;APDExposurePrice.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDExposurePriceVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDExposurePrice AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDExposurePrice> getAllVersions();
  
  
  
}