package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPBuildingAdditions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPBuildingAdditions extends entity.HOPDwellingCov {
  protected HOPBuildingAdditions()  {
    super((java.lang.Void)null);
  }
  
  public HOPBuildingAdditions(entity.PolicyPeriod branch)  {
    super(branch, "zu7jmsu26rk141vkaijeq6golm9");
  }
  
  public HOPBuildingAdditions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zu7jmsu26rk141vkaijeq6golm9");
  }
  
  public productmodel.OptionHOPBuildingAdditionsLimitType getHOPBuildingAdditionsLimitTerm() {
    return (productmodel.OptionHOPBuildingAdditionsLimitType)getCovTerm("zmcg09it95nsa2cc4va1ia5b118");
  }
  
  public boolean getHasHOPBuildingAdditionsLimitTerm() {
    return hasCovTerm("zmcg09it95nsa2cc4va1ia5b118");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPBuildingAdditionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPBuildingAdditions>() {
      public productmodel.HOPBuildingAdditions newEmptyInstance() {
        return new productmodel.HOPBuildingAdditions();
      }
      
      
    });
  }
}