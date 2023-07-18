package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredSpecPerilCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredSpecPerilCov extends entity.BusinessAutoCov {
  protected BAHiredSpecPerilCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredSpecPerilCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredSpecPerilCov");
  }
  
  public BAHiredSpecPerilCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredSpecPerilCov");
  }
  
  public productmodel.TypekeyBAHiredSpecPerilCovHiredCauseOfLossType getBAHiredSpecPerilCovHiredCauseOfLossTerm() {
    return (productmodel.TypekeyBAHiredSpecPerilCovHiredCauseOfLossType)getCovTerm("BAHiredSpecPerilCovHiredCauseOfLoss");
  }
  
  public productmodel.OptionBAHiredSpecPerilDdctType getBAHiredSpecPerilDdctTerm() {
    return (productmodel.OptionBAHiredSpecPerilDdctType)getCovTerm("BAHiredSpecPerilDdct");
  }
  
  public boolean getHasBAHiredSpecPerilCovHiredCauseOfLossTerm() {
    return hasCovTerm("BAHiredSpecPerilCovHiredCauseOfLoss");
  }
  
  public boolean getHasBAHiredSpecPerilDdctTerm() {
    return hasCovTerm("BAHiredSpecPerilDdct");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredSpecPerilCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredSpecPerilCov>() {
      public productmodel.BAHiredSpecPerilCov newEmptyInstance() {
        return new productmodel.BAHiredSpecPerilCov();
      }
      
      
    });
  }
}