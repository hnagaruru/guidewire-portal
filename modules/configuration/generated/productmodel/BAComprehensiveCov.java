package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAComprehensiveCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAComprehensiveCov extends entity.BusinessVehicleCov {
  protected BAComprehensiveCov()  {
    super((java.lang.Void)null);
  }
  
  public BAComprehensiveCov(entity.PolicyPeriod branch)  {
    super(branch, "BAComprehensiveCov");
  }
  
  public BAComprehensiveCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAComprehensiveCov");
  }
  
  public productmodel.OptionBAComprehensiveDdctType getBAComprehensiveDdctTerm() {
    return (productmodel.OptionBAComprehensiveDdctType)getCovTerm("BAComprehensiveDdct");
  }
  
  public productmodel.GenericBAZeroGlassType getBAZeroGlassTerm() {
    return (productmodel.GenericBAZeroGlassType)getCovTerm("BAZeroGlass");
  }
  
  public boolean getHasBAComprehensiveDdctTerm() {
    return hasCovTerm("BAComprehensiveDdct");
  }
  
  public boolean getHasBAZeroGlassTerm() {
    return hasCovTerm("BAZeroGlass");
  }
  
  static {
    com.guidewire._generated.productmodel.BAComprehensiveCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAComprehensiveCov>() {
      public productmodel.BAComprehensiveCov newEmptyInstance() {
        return new productmodel.BAComprehensiveCov();
      }
      
      
    });
  }
}