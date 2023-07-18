package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CommercialDriver.eti;CommercialDriver.eix;CommercialDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CommercialDriverVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CommercialDriver AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CommercialDriver> getAllVersions();
  
  
  
}