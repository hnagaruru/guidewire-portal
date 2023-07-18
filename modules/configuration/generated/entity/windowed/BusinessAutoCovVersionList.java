package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoCov.eti;BusinessAutoCov.eix;BusinessAutoCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessAutoCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BusinessAutoCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BALineCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.BALineCovCost bean);
  
  
  java.util.List<? extends entity.BusinessAutoCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BALineCovCostVersionList> getCosts();
  
  
  
}