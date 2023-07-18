package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbol.eti;CoverageSymbol.eix;CoverageSymbol.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CoverageSymbolVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CoverageSymbol AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbol> getAllVersions();
  
  
  
}