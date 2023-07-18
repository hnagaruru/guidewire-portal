package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartRF.eti;HOPCoveragePartRF.eix;HOPCoveragePartRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPCoveragePartRFVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPCoveragePartRF AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPCoveragePartRF> getAllVersions();
  
  
  
}