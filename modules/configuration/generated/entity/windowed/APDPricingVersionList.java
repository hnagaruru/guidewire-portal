package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDPricing.eti;APDPricing.eix;APDPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDPricingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDPricing AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDPricing> getAllVersions();
  
  
  
}