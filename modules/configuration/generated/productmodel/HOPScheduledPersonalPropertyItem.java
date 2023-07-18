package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalPropertyItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPScheduledPersonalPropertyItem extends entity.HOPLineSchCovItemCov {
  protected HOPScheduledPersonalPropertyItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPScheduledPersonalPropertyItem(entity.PolicyPeriod branch)  {
    super(branch, "zd5joencat3ep2cm32h3e5cdmj9");
  }
  
  public HOPScheduledPersonalPropertyItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zd5joencat3ep2cm32h3e5cdmj9");
  }
  
  public productmodel.DirectHOPScheduledPersonalPropertyItemAppraisedValueType getHOPScheduledPersonalPropertyItemAppraisedValueTerm() {
    return (productmodel.DirectHOPScheduledPersonalPropertyItemAppraisedValueType)getCovTerm("z0rj2ab9ajr9n0c821onqkj7209");
  }
  
  public productmodel.OptionHOPScheduledPersonalPropertyItemDeductibleType getHOPScheduledPersonalPropertyItemDeductibleTerm() {
    return (productmodel.OptionHOPScheduledPersonalPropertyItemDeductibleType)getCovTerm("z90golpur3a4feu7fgtkg60in98");
  }
  
  public productmodel.DirectHOPScheduledPersonalPropertyItemLimitType getHOPScheduledPersonalPropertyItemLimitTerm() {
    return (productmodel.DirectHOPScheduledPersonalPropertyItemLimitType)getCovTerm("zk4i8n347nmmtd6ve4j3b8utcj8");
  }
  
  public productmodel.OptionHOPScheduledPersonalPropertyItemTypeType getHOPScheduledPersonalPropertyItemTypeTerm() {
    return (productmodel.OptionHOPScheduledPersonalPropertyItemTypeType)getCovTerm("z0dgc55rc23ho41up1t30049hqb");
  }
  
  public productmodel.OptionHOPScheduledPersonalPropertyItemValuationType getHOPScheduledPersonalPropertyItemValuationTerm() {
    return (productmodel.OptionHOPScheduledPersonalPropertyItemValuationType)getCovTerm("z6ii69kdt74egdr5lbkdus1ck8a");
  }
  
  public boolean getHasHOPScheduledPersonalPropertyItemAppraisedValueTerm() {
    return hasCovTerm("z0rj2ab9ajr9n0c821onqkj7209");
  }
  
  public boolean getHasHOPScheduledPersonalPropertyItemDeductibleTerm() {
    return hasCovTerm("z90golpur3a4feu7fgtkg60in98");
  }
  
  public boolean getHasHOPScheduledPersonalPropertyItemLimitTerm() {
    return hasCovTerm("zk4i8n347nmmtd6ve4j3b8utcj8");
  }
  
  public boolean getHasHOPScheduledPersonalPropertyItemTypeTerm() {
    return hasCovTerm("z0dgc55rc23ho41up1t30049hqb");
  }
  
  public boolean getHasHOPScheduledPersonalPropertyItemValuationTerm() {
    return hasCovTerm("z6ii69kdt74egdr5lbkdus1ck8a");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPScheduledPersonalPropertyItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPScheduledPersonalPropertyItem>() {
      public productmodel.HOPScheduledPersonalPropertyItem newEmptyInstance() {
        return new productmodel.HOPScheduledPersonalPropertyItem();
      }
      
      
    });
  }
}