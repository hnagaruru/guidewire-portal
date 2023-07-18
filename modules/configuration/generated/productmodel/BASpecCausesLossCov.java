package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BASpecCausesLossCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BASpecCausesLossCov extends entity.BusinessVehicleCov {
  protected BASpecCausesLossCov()  {
    super((java.lang.Void)null);
  }
  
  public BASpecCausesLossCov(entity.PolicyPeriod branch)  {
    super(branch, "BASpecCausesLossCov");
  }
  
  public BASpecCausesLossCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BASpecCausesLossCov");
  }
  
  public productmodel.TypekeyBASpecCausesLossCovSpecifiedCauseOfLossType getBASpecCausesLossCovSpecifiedCauseOfLossTerm() {
    return (productmodel.TypekeyBASpecCausesLossCovSpecifiedCauseOfLossType)getCovTerm("BASpecCausesLossCovSpecifiedCauseOfLoss");
  }
  
  public productmodel.OptionBASpecCausesLossDdctType getBASpecCausesLossDdctTerm() {
    return (productmodel.OptionBASpecCausesLossDdctType)getCovTerm("BASpecCausesLossDdct");
  }
  
  public boolean getHasBASpecCausesLossCovSpecifiedCauseOfLossTerm() {
    return hasCovTerm("BASpecCausesLossCovSpecifiedCauseOfLoss");
  }
  
  public boolean getHasBASpecCausesLossDdctTerm() {
    return hasCovTerm("BASpecCausesLossDdct");
  }
  
  static {
    com.guidewire._generated.productmodel.BASpecCausesLossCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BASpecCausesLossCov>() {
      public productmodel.BASpecCausesLossCov newEmptyInstance() {
        return new productmodel.BASpecCausesLossCov();
      }
      
      
    });
  }
}