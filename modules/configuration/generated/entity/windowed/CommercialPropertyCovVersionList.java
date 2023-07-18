package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialPropertyCov.eti;CommercialPropertyCov.eix;CommercialPropertyCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CommercialPropertyCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CommercialPropertyCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialPropertyCov> getAllVersions();
  
  
  
}