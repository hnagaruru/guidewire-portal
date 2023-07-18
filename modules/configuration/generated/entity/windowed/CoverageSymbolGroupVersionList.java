package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbolGroup.eti;CoverageSymbolGroup.eix;CoverageSymbolGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CoverageSymbolGroupVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CoverageSymbolGroup AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CoverageSymbol> CoverageSymbolsAsOf(java.util.Date date);
  
  
  void addToCoverageSymbols(entity.CoverageSymbol bean);
  
  
  java.util.List<? extends entity.CoverageSymbolGroup> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CoverageSymbolVersionList> getCoverageSymbols();
  
  
  
}