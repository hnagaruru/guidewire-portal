package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineMod.eti;HOPLineMod.eix;HOPLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPLineModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPLineMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineModifierCost> HOPLineModifierCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPLineRF> HOPLineRateFactorsAsOf(java.util.Date date);
  
  
  void addToHOPLineModifierCosts(entity.HOPLineModifierCost bean);
  
  
  void addToHOPLineRateFactors(entity.HOPLineRF bean);
  
  
  java.util.List<? extends entity.HOPLineMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPLineModifierCostVersionList> getHOPLineModifierCosts();
  
  
  java.util.List<? extends entity.windowed.HOPLineRFVersionList> getHOPLineRateFactors();
  
  
  
}