package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingMod.eti;HOPDwellingMod.eix;HOPDwellingMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPDwellingMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingModifierCost> HOPDwellingModifierCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingRF> HOPDwellingRateFactorsAsOf(java.util.Date date);
  
  
  void addToHOPDwellingModifierCosts(entity.HOPDwellingModifierCost bean);
  
  
  void addToHOPDwellingRateFactors(entity.HOPDwellingRF bean);
  
  
  java.util.List<? extends entity.HOPDwellingMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingModifierCostVersionList> getHOPDwellingModifierCosts();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingRFVersionList> getHOPDwellingRateFactors();
  
  
  
}