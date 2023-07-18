package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersPropOffPrem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPersPropOffPrem extends entity.BOPLocationCov {
  protected BOPPersPropOffPrem()  {
    super((java.lang.Void)null);
  }
  
  public BOPPersPropOffPrem(entity.PolicyPeriod branch)  {
    super(branch, "BOPPersPropOffPrem");
  }
  
  public BOPPersPropOffPrem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPersPropOffPrem");
  }
  
  public productmodel.OptionBOPPerPropOffPremLimType getBOPPerPropOffPremLimTerm() {
    return (productmodel.OptionBOPPerPropOffPremLimType)getCovTerm("BOPPerPropOffPremLim");
  }
  
  public boolean getHasBOPPerPropOffPremLimTerm() {
    return hasCovTerm("BOPPerPropOffPremLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPersPropOffPremInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPersPropOffPrem>() {
      public productmodel.BOPPersPropOffPrem newEmptyInstance() {
        return new productmodel.BOPPersPropOffPrem();
      }
      
      
    });
  }
}