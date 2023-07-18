package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSign.eti;IMSign.eix;IMSign.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMSignVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMSign AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMSignCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToCoverages(entity.IMSignCov bean);
  
  
  java.util.List<? extends entity.IMSign> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMSignCovVersionList> getCoverages();
  
  
  
}