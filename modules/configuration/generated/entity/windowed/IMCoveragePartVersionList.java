package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCoveragePart.eti;IMCoveragePart.eix;IMCoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMCoveragePartVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMCoveragePart AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMCoveragePart> getAllVersions();
  
  
  
}