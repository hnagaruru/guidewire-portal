package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCov.eti;PersonalAutoCov.eix;PersonalAutoCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalAutoCovVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PersonalAutoCov AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoCovCost> CostsAsOf(java.util.Date date);
  
  
  void addToCosts(entity.PersonalAutoCovCost bean);
  
  
  java.util.List<? extends entity.PersonalAutoCov> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PersonalAutoCovCostVersionList> getCosts();
  
  
  
}