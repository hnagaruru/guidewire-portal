package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLTerritory.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLTerritory extends entity.GeneralLiabilityCond {
  protected GLTerritory()  {
    super((java.lang.Void)null);
  }
  
  public GLTerritory(entity.PolicyPeriod branch)  {
    super(branch, "GLTerritory");
  }
  
  public GLTerritory(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLTerritory");
  }
  
  public boolean getHasNamedCountriesTerm() {
    return hasCovTerm("NamedCountries");
  }
  
  public boolean getHasTerritoryDefinitionTerm() {
    return hasCovTerm("TerritoryDefinition");
  }
  
  public productmodel.GenericNamedCountriesType getNamedCountriesTerm() {
    return (productmodel.GenericNamedCountriesType)getCovTerm("NamedCountries");
  }
  
  public productmodel.TypekeyTerritoryDefinitionType getTerritoryDefinitionTerm() {
    return (productmodel.TypekeyTerritoryDefinitionType)getCovTerm("TerritoryDefinition");
  }
  
  static {
    com.guidewire._generated.productmodel.GLTerritoryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLTerritory>() {
      public productmodel.GLTerritory newEmptyInstance() {
        return new productmodel.GLTerritory();
      }
      
      
    });
  }
}