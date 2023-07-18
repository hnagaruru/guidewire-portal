package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPReceivablesCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPReceivablesCov extends entity.BOPBuildingCov {
  protected BOPReceivablesCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPReceivablesCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPReceivablesCov");
  }
  
  public BOPReceivablesCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPReceivablesCov");
  }
  
  public productmodel.DirectBOPARonPremLimType getBOPARonPremLimTerm() {
    return (productmodel.DirectBOPARonPremLimType)getCovTerm("BOPARonPremLim");
  }
  
  public productmodel.OptionBOPReceivablesOffPremLimType getBOPReceivablesOffPremLimTerm() {
    return (productmodel.OptionBOPReceivablesOffPremLimType)getCovTerm("BOPReceivablesOffPremLim");
  }
  
  public boolean getHasBOPARonPremLimTerm() {
    return hasCovTerm("BOPARonPremLim");
  }
  
  public boolean getHasBOPReceivablesOffPremLimTerm() {
    return hasCovTerm("BOPReceivablesOffPremLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPReceivablesCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPReceivablesCov>() {
      public productmodel.BOPReceivablesCov newEmptyInstance() {
        return new productmodel.BOPReceivablesCov();
      }
      
      
    });
  }
}