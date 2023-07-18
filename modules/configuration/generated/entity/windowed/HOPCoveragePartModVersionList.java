package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartMod.eti;HOPCoveragePartMod.eix;HOPCoveragePartMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCoveragePartModVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCoveragePartMod AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartRF> HOPCoveragePartRateFactorsAsOf(java.util.Date date);
  
  
  void addToHOPCoveragePartRateFactors(entity.HOPCoveragePartRF bean);
  
  
  java.util.List<? extends entity.HOPCoveragePartMod> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPCoveragePartRFVersionList> getHOPCoveragePartRateFactors();
  
  
  
}