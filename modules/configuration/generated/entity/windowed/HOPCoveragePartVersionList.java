package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePart.eti;HOPCoveragePart.eix;HOPCoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCoveragePartVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCoveragePart AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartMod> HOPCoveragePartModsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwelling> HOPDwellingsAsOf(java.util.Date date);
  
  
  void addToConditions(entity.HOPCoveragePartCond bean);
  
  
  void addToCoverages(entity.HOPCoveragePartCov bean);
  
  
  void addToExclusions(entity.HOPCoveragePartExcl bean);
  
  
  void addToHOPCoveragePartMods(entity.HOPCoveragePartMod bean);
  
  
  void addToHOPDwellings(entity.HOPDwelling bean);
  
  
  java.util.List<? extends entity.HOPCoveragePart> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartModVersionList> getHOPCoveragePartMods();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingVersionList> getHOPDwellings();
  
  
  
}