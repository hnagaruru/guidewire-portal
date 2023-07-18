package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationNamedInsured.eti;LocationNamedInsured.eix;LocationNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface LocationNamedInsuredVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.LocationNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> getAllVersions();
  
  
  
}