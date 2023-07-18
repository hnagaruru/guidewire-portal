package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskPricing.eti;APDRiskPricing.eix;APDRiskPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskPricingVersionList extends entity.windowed.APDPricingVersionList {
  entity.APDRiskPricing AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskPricing> getAllVersions();
  
  
  
}