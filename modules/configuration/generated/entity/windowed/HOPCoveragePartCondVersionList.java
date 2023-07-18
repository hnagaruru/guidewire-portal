package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartCond.eti;HOPCoveragePartCond.eix;HOPCoveragePartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCoveragePartCondVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCoveragePartCond AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartCond> getAllVersions();
  
  
  
}